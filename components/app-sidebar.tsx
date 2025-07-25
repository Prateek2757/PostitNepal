import * as React from "react";
import { FlameIcon, HomeIcon, Minus, Plus, TrendingUpIcon } from "lucide-react";
import PostIt from "../images/PostIt_Nepal.png";
import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { getSubreddits } from "@/sanity/lib/subreadit/getSubreddits";
import CreateCommunityButton from "./header/CreateCommunityButton";


type SidebarData = {
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive: boolean;
    }[];
  }[];
};



// This is sample data.

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const subreadits = await getSubreddits();

  //console.log(subreadits);

  const data: SidebarData = {
    navMain: [
      {
        title: "Communities",
        url: "#",
        items:
          subreadits?.map((subreddit: { title: string; slug: string | null }) => ({
            title: subreddit.title  || "unknown",
            url: `/community/${subreddit.slug}`,
            isActive: false,
          })) || [],
      },
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image height={150} src={PostIt} width={140} alt="Post it" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuButton asChild>
            <CreateCommunityButton/> 
          </SidebarMenuButton>

          <SidebarMenuButton asChild className="p-5">
            <Link href="/">
              <HomeIcon className="w-4 h-4 mr-2" />
              Home
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="p-5">
            <Link href="/popular">
              <TrendingUpIcon className="w-4 h-4 mr-2" />
              Popular
            </Link>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="p-5">
            <Link href="/hot">
              <FlameIcon className="w-4 h-4 mr-2" />
              Hot/Controversial
            </Link>
          </SidebarMenuButton>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 0}
                className="group/collapsible "
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
