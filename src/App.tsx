import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebarContainer } from "@/components/container/AppSidebarContainer";
import { HeaderContainer } from "@/components/container/HeaderContainer";
import { AppProvider } from "@/contexts/AppContext";
import { DashboardContainer } from "@/components/container/DashboardContainer";
import DocumentInbox from "./pages/DocumentInbox";
import DocumentReview from "./pages/DocumentReview";
import DocumentLibrary from "./pages/DocumentLibrary";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full bg-gray-50 dark:bg-gray-900">
              <AppSidebarContainer />
              <div className="flex-1 flex flex-col">
                <HeaderContainer />
                <main className="flex-1 p-4 sm:p-6">
                  <Routes>
                    <Route path="/" element={<DashboardContainer />} />
                    <Route path="/inbox" element={<DocumentInbox />} />
                    <Route path="/review/:id" element={<DocumentReview />} />
                    <Route path="/library" element={<DocumentLibrary />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
