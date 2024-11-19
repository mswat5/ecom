import { Link } from "react-router-dom";
import { CartSheet } from "./cart-sheet";
import { Search, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const navigationMenuTriggerStyle = cn(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-thin transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      {/* First Row - Login, Search, and Cart */}
      <div className="">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button>Login</Button>

              <div className="hidden sm:flex items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-[200px] h-8"
                />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <CartSheet />
          </div>
        </div>
      </div>

      {/* Second Row - Project Name */}
      <div className="">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl md:text-4xl font-bold">
                JNPMOBILENACCESSORIES
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Third Row - Navigation Menu */}
      <div className="container mx-auto px-4 py-2 flex justify-center">
        <div className="hidden md:block">
          <NavigationMenu className="justify-center w-full">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/products" className={navigationMenuTriggerStyle}>
                  Shop
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/store-policies"
                  className={navigationMenuTriggerStyle}
                >
                  Store Policies
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle}>
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/support" className={navigationMenuTriggerStyle}>
                  Support
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/groups" className={navigationMenuTriggerStyle}>
                  Groups
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/members" className={navigationMenuTriggerStyle}>
                  Members
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/events" className={navigationMenuTriggerStyle}>
                  Events
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/program-list" className={navigationMenuTriggerStyle}>
                  Program List
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Updated Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Add Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4 bg-background">
            <Link
              to="/about"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/store-policies"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store Policies
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/support"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Support
            </Link>
            <Link
              to="/groups"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Groups
            </Link>
            <Link
              to="/members"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Members
            </Link>
            <Link
              to="/events"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/program-list"
              className="px-4 py-2 text-sm hover:bg-accent rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Program List
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
