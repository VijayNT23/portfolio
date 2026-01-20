package com.vijay.portfolio.Model;

import java.util.List;

public class Project {
    private String title;
    private String subtitle;
    private String description;
    private List<String> technologies;
    private String githubUrl;
    private String demoUrl;
    private String teamSize;
    private String period;
    private String icon;

    // Constructor with ALL parameters (9 parameters)
    public Project(String title, String subtitle, String description, List<String> technologies,
                   String githubUrl, String demoUrl, String teamSize, String period, String icon) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.technologies = technologies;
        this.githubUrl = githubUrl;
        this.demoUrl = demoUrl;
        this.teamSize = teamSize;
        this.period = period;
        this.icon = icon;
    }

    // Getters
    public String getTitle() { return title; }
    public String getSubtitle() { return subtitle; }
    public String getDescription() { return description; }
    public List<String> getTechnologies() { return technologies; }
    public String getGithubUrl() { return githubUrl; }
    public String getDemoUrl() { return demoUrl; }
    public String getTeamSize() { return teamSize; }
    public String getPeriod() { return period; }
    public String getIcon() { return icon; }

    // Setters
    public void setTitle(String title) { this.title = title; }
    public void setSubtitle(String subtitle) { this.subtitle = subtitle; }
    public void setDescription(String description) { this.description = description; }
    public void setTechnologies(List<String> technologies) { this.technologies = technologies; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }
    public void setDemoUrl(String demoUrl) { this.demoUrl = demoUrl; }
    public void setTeamSize(String teamSize) { this.teamSize = teamSize; }
    public void setPeriod(String period) { this.period = period; }
    public void setIcon(String icon) { this.icon = icon; }
}