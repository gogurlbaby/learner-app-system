import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "../../../components/ui/sidebar";
import {
  Users,
  LayoutDashboard,
  GraduationCap,
  FileText,
  Settings,
  Power,
} from "lucide-react";
import { useRouter } from "next/navigation";

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

const bottomItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    content: "settings",
  },
  {
    title: "Logout",
    url: "#",
    icon: Power,
    content: "logout",
  },
];

export function AppSidebar({ setActiveContent }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    router.push("/admin/login");
  };

  return (
    <Sidebar className="[&>div]:!bg-[#01589A]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="hidden md:block bg-[#fff] py-[2rem] px-[4rem] rounded-md mt-2 mb-[2.313rem]">
              <img src="/images/azubi-logo.svg" alt="" />
            </div>
            <div className="flex justify-center items-center md:hidden bg-[#01589A] py-[2rem] px-[4rem] rounded-md mt-2 mb-[2.313rem]">
              <img
                src="/images/azubi-footer-logo.svg"
                alt=""
                className="w-20"
              />
            </div>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {/* <SidebarMenuButton asChild> */}
                  <button
                    onClick={() => setActiveContent(item.content)}
                    className="md:[&>a]:hover:bg-[#E6EFF5] [&>a]:hover:text-[#01589A] text-[#01589A] flex gap-2 p-2"
                  >
                    <item.icon className="md:text-white text-[#01589A]" />
                    <span className="md:text-white text-base font-sans font-normal">
                      {item.title}
                    </span>
                  </button>
                  {/* </SidebarMenuButton> */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto">
          <SidebarMenu>
            {bottomItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                {item.content === "logout" ? (
                  <button
                    onClick={handleLogout}
                    className="md:[&>a]:hover:bg-[#E6EFF5] [&>a]:hover:text-[#01589A] text-[#01589A] flex gap-2 p-2"
                  >
                    <item.icon className="md:text-white text-[#01589A]" />
                    <span className="md:text-white text-base font-sans font-normal">
                      {item.title}
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveContent(item.content)}
                    className="md:[&>a]:hover:bg-[#E6EFF5] [&>a]:hover:text-[#01589A] text-[#01589A] flex gap-2 p-2"
                  >
                    <item.icon className="md:text-white text-[#01589A] " />
                    <span className="md:text-white text-base font-sans font-normal">
                      {item.title}
                    </span>
                  </button>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
