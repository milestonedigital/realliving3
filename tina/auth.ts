import { TinaAuth } from "tinacms";

export const authHandler = async (req: any, res: any) => {
  // This handles TinaCMS authentication
  // The client will be redirected here after login
  
  if (req.method === "POST") {
    const { token } = req.body;
    
    // Store token in session
    req.session.tinaToken = token;
    
    res.status(200).json({
      success: true,
      message: "Authenticated successfully",
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export const isAuthorized = (req: any) => {
  return !!req.session?.tinaToken;
};
