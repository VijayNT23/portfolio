package com.vijay.portfolio.Model;

public class Education {
    private String degree;
    private String institution;
    private String period;
    private String details;

    public Education(String degree, String institution, String period, String details) {
        this.degree = degree;
        this.institution = institution;
        this.period = period;
        this.details = details;
    }

    // Getters and Setters
    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getPeriod() { return period; }
    public void setPeriod(String period) { this.period = period; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }
}