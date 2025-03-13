import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Users, LayoutDashboard, GraduationCap, FileText } from "lucide-react";

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
    content: "dasboard",
  },
  {
    title: "Invoices",
    url: "#",
    icon: FileText,
    content: "invoices",
  },
  {
    title: "Learners",
    url: "#",
    icon: Users,
    content: "learners",
  },
  {
    title: "Courses",
    url: "#",
    icon: GraduationCap,
    content: "courses",
  },
  {
    title: "Report",
    url: "#",
    icon: LayoutDashboard,
    content: "report",
  },
];
export function AppSidebar({ setActiveContent }) {
  return (
    <Sidebar className="[&>div]:!bg-[#01589A]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="bg-white py-[2rem] px-[4rem] rounded-md mt-2 mb-[2.313rem]">
              <img src="/images/azubi-logo.svg" alt="" />
            </div>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => setActiveContent(item.content)}
                      className="[&>a]:hover:bg-[#E6EFF5] [&>a]:hover:text-[#01589A]"
                    >
                      <item.icon className="text-black" />
                      <span className="text-black text-base font-sans font-normal">
                        {item.title}
                      </span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
