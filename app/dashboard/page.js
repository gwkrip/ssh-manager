"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  Home,
  Users,
  Settings,
  BarChart3,
  FileText,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  User,
  Sun,
  Moon,
  Shield,
  Activity,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Calendar,
  MessageSquare,
} from "lucide-react";
import "../../styles/dashboard.css";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Navigation items
  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "analytics", label: "Analytics", icon: BarChart3, path: "/analytics" },
    { id: "users", label: "Users", icon: Users, path: "/users" },
    { id: "orders", label: "Orders", icon: ShoppingCart, path: "/orders" },
    { id: "reports", label: "Reports", icon: FileText, path: "/reports" },
    { id: "calendar", label: "Calendar", icon: Calendar, path: "/calendar" },
    { id: "messages", label: "Messages", icon: MessageSquare, path: "/messages" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
  ];

  // Stats data
  const statsData = [
    {
      title: "Total Revenue",
      value: "Rp 125,430,000",
      change: "+12.5%",
      changeType: "positive",
      icon: DollarSign,
    },
    {
      title: "Active Users",
      value: "2,543",
      change: "+5.2%",
      changeType: "positive",
      icon: Users,
    },
    {
      title: "Orders",
      value: "1,429",
      change: "-2.1%",
      changeType: "negative",
      icon: ShoppingCart,
    },
    {
      title: "Growth Rate",
      value: "8.2%",
      change: "+1.8%",
      changeType: "positive",
      icon: TrendingUp,
    },
  ];

  // Recent activities
  const recentActivities = [
    {
      id: 1,
      user: "John Doe",
      action: "completed order #1234",
      time: "2 hours ago",
      type: "order",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "updated profile information",
      time: "4 hours ago",
      type: "profile",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "created new report",
      time: "6 hours ago",
      type: "report",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      action: "logged in from mobile",
      time: "1 day ago",
      type: "login",
    },
  ];

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    setSidebarOpen(false);
  };

  if (status === "loading") {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">Admin Panel</h2>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${
                  activeMenu === item.id ? "nav-item-active" : ""
                }`}
                onClick={() => handleMenuClick(item.id)}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-user-avatar">
              <User size={20} />
            </div>
            <div className="sidebar-user-info">
              <p className="sidebar-user-name">
                {session?.user?.name || "Admin User"}
              </p>
              <p className="sidebar-user-role">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="main-header">
          <div className="header-left">
            <button
              className="mobile-menu-button"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="page-title">Dashboard</h1>
          </div>

          <div className="header-center">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search anything..."
                className="search-input"
              />
            </div>
          </div>

          <div className="header-right">
            <button className="header-action" onClick={toggleDarkMode}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="header-action notification-button">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-dropdown">
              <button
                className="user-dropdown-trigger"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="user-avatar">
                  <User size={20} />
                </div>
                <ChevronDown size={16} />
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-menu">
                  <div className="dropdown-item">
                    <User size={16} />
                    <span>Profile</span>
                  </div>
                  <div className="dropdown-item">
                    <Settings size={16} />
                    <span>Settings</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout" onClick={handleSignOut}>
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <div className="stat-header">
                    <div className="stat-icon">
                      <IconComponent size={24} />
                    </div>
                    <span
                      className={`stat-change ${
                        stat.changeType === "positive" ? "positive" : "negative"
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-title">{stat.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="main-grid">
            {/* Chart Card */}
            <div className="card chart-card">
              <div className="card-header">
                <h3>Revenue Analytics</h3>
                <button className="card-action">
                  <BarChart3 size={16} />
                </button>
              </div>
              <div className="chart-placeholder">
                <div className="chart-bars">
                  <div className="chart-bar" style={{ height: "60%" }}></div>
                  <div className="chart-bar" style={{ height: "80%" }}></div>
                  <div className="chart-bar" style={{ height: "45%" }}></div>
                  <div className="chart-bar" style={{ height: "90%" }}></div>
                  <div className="chart-bar" style={{ height: "70%" }}></div>
                  <div className="chart-bar" style={{ height: "85%" }}></div>
                  <div className="chart-bar" style={{ height: "65%" }}></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card activity-card">
              <div className="card-header">
                <h3>Recent Activity</h3>
                <button className="card-action">
                  <Activity size={16} />
                </button>
              </div>
              <div className="activity-list">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-avatar">
                      <User size={16} />
                    </div>
                    <div className="activity-content">
                      <p className="activity-text">
                        <strong>{activity.user}</strong> {activity.action}
                      </p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card actions-card">
              <div className="card-header">
                <h3>Quick Actions</h3>
                <button className="card-action">
                  <Shield size={16} />
                </button>
              </div>
              <div className="actions-grid">
                <button className="action-button">
                  <Users size={20} />
                  <span>Add User</span>
                </button>
                <button className="action-button">
                  <FileText size={20} />
                  <span>New Report</span>
                </button>
                <button className="action-button">
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
                <button className="action-button">
                  <Bell size={20} />
                  <span>Send Alert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}