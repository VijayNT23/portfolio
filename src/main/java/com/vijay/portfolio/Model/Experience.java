package com.vijay.portfolio.Model;

import java.util.List;

public class Experience {
    private String position;
    private String company;
    private String period;
    private List<String> responsibilities;

    public Experience(String position, String company, String period, List<String> responsibilities) {
        this.position = position;
        this.company = company;
        this.period = period;
        this.responsibilities = responsibilities;
    }

    // Getters and Setters
    public String getPosition() { return position; }
    public String getCompany() { return company; }
    public String getPeriod() { return period; }
    public List<String> getResponsibilities() { return responsibilities; }

    // Setters
    public void setPosition(String position) { this.position = position; }
    public void setCompany(String company) { this.company = company; }
    public void setPeriod(String period) { this.period = period; }
    public void setResponsibilities(List<String> responsibilities) { this.responsibilities = responsibilities; }
}