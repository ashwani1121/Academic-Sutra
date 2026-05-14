import React from "react";
import {
    CalendarDays,
    Globe,
    Users,
    FileText,
    Bell,
    Download,
    LayoutDashboard,
    Clock3,
    MessageCircle,
    ShieldCheck,
    Mail,
    BarChart3,
    Award,
    BookOpen,
    Presentation,
    Layers3,
    Sparkles,
    Database,
} from "lucide-react";

const features = [
    {
        icon: CalendarDays,
        title: "Conference Management",
        desc: "Manage academic conferences, events, and paper workflows with ease.",
    },
    {
        icon: Globe,
        title: "Global Research Network",
        desc: "Connect researchers, mentors, and institutions across the world.",
    },
    {
        icon: Users,
        title: "Reviewer Assignment",
        desc: "Assign reviewers manually or automatically for better evaluation.",
    },
    {
        icon: FileText,
        title: "Paper Submission",
        desc: "Upload abstracts, research papers, and supplementary materials securely.",
    },
    {
        icon: Bell,
        title: "Smart Notifications",
        desc: "Send instant updates and reminders to authors and participants.",
    },
    {
        icon: Download,
        title: "Export Reports",
        desc: "Export conference reports and submission data in multiple formats.",
    },
    {
        icon: Layers3,
        title: "Multi-Track Conferences",
        desc: "Create and manage multiple conference tracks and categories.",
    },
    {
        icon: LayoutDashboard,
        title: "Smart Dashboard",
        desc: "Track submissions, approvals, schedules, and conference activities.",
    },
    {
        icon: Clock3,
        title: "Session Scheduling",
        desc: "Manage speaker sessions, timings, and presentation schedules.",
    },
    {
        icon: MessageCircle,
        title: "Discussion System",
        desc: "Enable communication between authors, reviewers, and organizers.",
    },
    {
        icon: BookOpen,
        title: "E-Learning Support",
        desc: "Access webinars, workshops, and digital learning resources.",
    },
    {
        icon: Award,
        title: "Certificate Generation",
        desc: "Generate participation and presentation certificates instantly.",
    },
    {
        icon: Database,
        title: "File & Media Support",
        desc: "Upload PDF, DOCX, PPT, videos, posters, and research files.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Authentication",
        desc: "Role-based login and secure access for all users and organizers.",
    },
    {
        icon: Sparkles,
        title: "AI Recommendations",
        desc: "Get smart suggestions for conferences and research opportunities.",
    },
    {
        icon: Presentation,
        title: "Presentation Management",
        desc: "Organize presentation slots and manage speaker sessions efficiently.",
    },
    {
        icon: Mail,
        title: "Email Automation",
        desc: "Send automated emails for approvals, reminders, and updates.",
    },
    {
        icon: BarChart3,
        title: "Analytics & Reports",
        desc: "Monitor conference performance and generate detailed insights.",
    },
];

const Features = () => {
    return (
        <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">

            <div className="w-full max-w-[1440px] mx-auto px-[10px] sm:px-6 md:px-8 lg:px-10">

                {/* Heading */}
                <div className="text-center mb-14">

                    <h2
                        className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold mb-5
              bg-gradient-to-r from-yellow-400 via-blue-500 to-purple-500
              bg-clip-text text-transparent
            "
                    >
                        Our Features
                    </h2>

                    <p
                        className="
              max-w-3xl mx-auto
              text-sm sm:text-base md:text-lg
              text-gray-600 leading-7
            "
                    >
                        Everything you need to manage conferences, research collaborations,
                        academic workflows, and learning experiences in one modern platform.
                    </p>
                </div>

                {/* Features Grid */}
                <div
                    className="
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 lg:gap-8
          "
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="
                  group
                  relative
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-6
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all duration-500
                  overflow-hidden
                "
                            >
                                {/* Gradient Hover Background */}
                                <div
                                    className="
                    absolute inset-0
                    opacity-0 group-hover:opacity-100
                    transition duration-500
                    bg-gradient-to-br
                    from-yellow-50
                    via-blue-50
                    to-purple-50
                  "
                                ></div>

                                {/* Content */}
                                <div className="relative z-10 flex items-start gap-4">

                                    {/* Icon */}
                                    <div
                                        className="
  min-w-[60px] h-[60px]
  rounded-2xl
  flex items-center justify-center
  bg-blue-500
  text-blue-600
  shadow-md
  group-hover:scale-110
  transition-all duration-500
"
                                    >
                                        <Icon className="text-white" size={28} />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3
                                            className="
                        text-lg sm:text-xl
                        font-bold
                        text-gray-800
                        mb-2
                        group-hover:text-blue-600
                        transition duration-300
                      "
                                        >
                                            {feature.title}
                                        </h3>

                                        <p
                                            className="
                        text-sm sm:text-base
                        text-gray-600
                        leading-6
                      "
                                        >
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Glow Line */}
                                <div
                                    className="
                    absolute bottom-0 left-0
                    w-0 group-hover:w-full
                    h-1
                    bg-gradient-to-r
                    from-yellow-400
                    via-blue-500
                    to-purple-500
                    transition-all duration-500
                  "
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;