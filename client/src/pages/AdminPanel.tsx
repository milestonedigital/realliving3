import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { LogOut, Plus, Edit2, Trash2 } from "lucide-react";

export default function AdminPanel() {
  const [, setLocation] = useLocation();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const logoutMutation = trpc.admin.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out");
      setLocation("/");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const handleSaveContent = () => {
    if (!title || !content) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Content saved successfully!");
    setTitle("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">REALiving Admin Panel</h1>
            <p className="text-sm text-slate-600">Manage your website content</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            disabled={logoutMutation.isPending}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Content Editor */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Create New Content</CardTitle>
                <CardDescription>
                  Add a new page, blog post, or update existing content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter content title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    placeholder="Enter your content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                  />
                </div>
                <Button onClick={handleSaveContent} className="w-full gap-2">
                  <Plus className="w-4 h-4" />
                  Save Content
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Plus className="w-4 h-4" />
                  New Blog Post
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Edit2 className="w-4 h-4" />
                  Edit Pages
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Edit2 className="w-4 h-4" />
                  Manage Services
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  No recent changes yet. Start editing content to see them here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content List */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Your Content</CardTitle>
            <CardDescription>
              Manage all your pages, posts, and content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-slate-600">No content yet. Create your first content above!</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
