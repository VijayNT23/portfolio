package com.vijay.portfolio.Model;

public class Skill {
    private String name;
    private String category;
    private String iconClass;
    private String color;

    public Skill(String name, String category, String iconClass, String color) {
        this.name = name;
        this.category = category;
        this.iconClass = iconClass;
        this.color = color;
    }

    // Getters
    public String getName() { return name; }
    public String getCategory() { return category; }
    public String getIconClass() { return iconClass; }
    public String getColor() { return color; }

    // Color getter for CSS
    public String getSkillColor() {
        switch(color) {
            case "java": return "#007396";
            case "spring": return "#6DB33F";
            case "react": return "#61DAFB";
            case "javascript": return "#F7DF1E";
            case "python": return "#3776AB";
            case "mysql": return "#4479A1";
            case "git": return "#F05032";
            case "docker": return "#2496ED";
            case "aws": return "#FF9900";
            case "linux": return "#FCC624";
            case "typescript": return "#3178C6";
            case "html": return "#E34F26";
            case "css": return "#1572B6";
            case "postgresql": return "#4169E1";
            case "node": return "#339933";
            case "express": return "#000000";
            case "api": return "#FF6B6B";
            case "jwt": return "#000000";
            default: return "#3B82F6";
        }
    }
}