package com.vijay.portfolio.controller;

import com.vijay.portfolio.Model.*;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        // Personal Information
        model.addAttribute("name", "Vijay Pandey");
        model.addAttribute("title", "Software Engineer | Full Stack Developer");
        model.addAttribute("tagline", "Crafting digital experiences with code & creativity");
        model.addAttribute("email", "pandeyvijay739@gmail.com");
        model.addAttribute("phone", "+91 9004645040");
        model.addAttribute("location", "Kalyan, Maharashtra, India");

        // Social Links
        model.addAttribute("linkedin", "https://www.linkedin.com/in/vijay-pandey-87804427b/");
        model.addAttribute("github", "https://github.com/VijayNT23");
        model.addAttribute("githubProfile", "https://github.com/VijayNT23?tab=repositories");

        // Enhanced Objective with HTML styling
        model.addAttribute("objective", "<strong class='text-neon-blue'>Passionate Software Engineer</strong> crafting digital solutions with <span class='text-neon-blue'>Java Spring Boot</span> & <span class='text-neon-purple'>React</span>. I bridge the gap between <em>complex problems</em> and <em>elegant solutions</em> through clean code, innovative thinking, and scalable architecture. Currently mastering <span class='gradient-text'>microservices & cloud-native</span> applications to build the next generation of web experiences.");

        // Enhanced About Me Background
        model.addAttribute("aboutBackground", "A passionate and dedicated software engineer with a strong foundation in Computer Science gained through 7+ years of academic pursuit. Currently focused on mastering full-stack development with Java Spring Boot and React. My journey is driven by curiosity and a commitment to continuous learning, always eager to build practical solutions and contribute to impactful projects. I thrive on tackling challenges and transforming ideas into functional applications.");

        // Enhanced Personal Qualities
        List<Map<String, String>> qualities = Arrays.asList(
                Map.of("name", "Team Collaboration", "icon", "fas fa-users", "color", "blue"),
                Map.of("name", "Creative Problem-Solving", "icon", "fas fa-lightbulb", "color", "yellow"),
                Map.of("name", "Innovative Thinking", "icon", "fas fa-rocket", "color", "purple"),
                Map.of("name", "Analytical Mindset", "icon", "fas fa-chart-line", "color", "green"),
                Map.of("name", "Adaptive Learning", "icon", "fas fa-sync-alt", "color", "teal"),
                Map.of("name", "Attention to Detail", "icon", "fas fa-search", "color", "pink"),
                Map.of("name", "Effective Communication", "icon", "fas fa-comments", "color", "indigo"),
                Map.of("name", "Project Management", "icon", "fas fa-tasks", "color", "orange")
        );
        model.addAttribute("qualities", qualities);

        // Tech Passions
        List<String> techPassions = Arrays.asList(
                "Cloud Architecture", "System Design", "Performance & Monitoring",
                "Performance Optimization", "Clean Code Practices", "Secure API Development"
        );
        model.addAttribute("techPassions", techPassions);

        // Skills with enhanced 3D data
        List<Skill> skills = Arrays.asList(
                // Programming Languages
                new Skill("Java", "programming", "fab fa-java", "java"),
                new Skill("JavaScript", "programming", "fab fa-js-square", "javascript"),
                new Skill("TypeScript", "programming", "fas fa-code", "typescript"),
                new Skill("Python", "programming", "fab fa-python", "python"),

                // Backend Technologies
                new Skill("Spring Boot", "backend", "fas fa-leaf", "spring"),
                new Skill("Spring Security", "backend", "fas fa-shield-alt", "spring"),
                new Skill("RESTful APIs", "backend", "fas fa-cloud", "api"),
                new Skill("JWT Authentication", "backend", "fas fa-key", "jwt"),
                new Skill("Node.js", "backend", "fab fa-node-js", "node"),
                new Skill("Express.js", "backend", "fas fa-server", "express"),
                new Skill("FastAPI", "backend", "fab fa-python", "python"),

                // Frontend Technologies
                new Skill("React.js", "frontend", "fab fa-react", "react"),
                new Skill("HTML5", "frontend", "fab fa-html5", "html"),
                new Skill("CSS3", "frontend", "fab fa-css3-alt", "css"),

                // Databases
                new Skill("MySQL", "database", "fas fa-database", "mysql"),
                new Skill("PostgreSQL", "database", "fas fa-database", "postgresql"),

                // Tools & Others
                new Skill("Git", "tools", "fab fa-git-alt", "git"),
                new Skill("GitHub", "tools", "fab fa-github", "github"),
                new Skill("AWS", "cloud", "fab fa-aws", "aws"),
                new Skill("Webpack", "tools", "fas fa-cube", "webpack"),
                new Skill("Linux", "tools", "fab fa-linux", "linux")
        );
        model.addAttribute("skills", skills);

        // Projects with updated FlashOverseas link
        List<Project> projects = Arrays.asList(
                new Project(
                        "CineCoolTV",
                        "Personal Project • Movies, Series & Anime Tracker",
                        "Full-stack entertainment platform that helps users discover, track, and manage movies, TV series, and anime in one unified hub. Features personalized watchlists, content discovery, and a modern UI. Solves the problem of users jumping between multiple platforms by providing organized tracking and intelligent recommendations in a single application.",
                        Arrays.asList("React.js", "Spring Boot", "Spring Security", "JWT", "MySQL", "TMDB API"),
                        "https://github.com/VijayNT23/CineCoolTV",
                        "https://cine-cool-tv.vercel.app/",
                        "Individual",
                        "Nov 2025",
                        "🎬"
                ),
                new Project(
                        "FlashOverseas",
                        "Freelancing Project • Education Consultancy Platform",
                        "A professional React website developed for an overseas education consultancy. Focused on performance optimization, modern UI/UX, and responsive design for prospective students.",
                        Arrays.asList("React.js", "Tailwind CSS", "JavaScript", "Vercel"),
                        "https://github.com/VijayNT23/FlashOverseas-Master",
                        "https://flash-overseas-master.vercel.app/",
                        "Individual",
                        "Aug 2024 - Sept 2024",
                        "🌍"
                )
        );
        model.addAttribute("projects", projects);

        // Education Timeline
        List<Education> education = Arrays.asList(
                new Education("M.Sc. Computer Science", "SIES College of Arts, Science & Commerce", "2023-2025", "7.9" +
                        " CGPA"),
                new Education("B.Sc. Computer Science", "N.E.S. Ratnam College of Arts, Science & Commerce", "2020" +
                        "-2023", "9.16 CGPA")
        );
        model.addAttribute("education", education);

        // Languages
        model.addAttribute("languages", Arrays.asList("English", "Hindi"));

        // Pre-filled email link
        try {
            String subject = URLEncoder.encode("Portfolio Inquiry", StandardCharsets.UTF_8);
            String body = URLEncoder.encode("Hi Vijay,\n\nI came across your portfolio and wanted to connect regarding...", StandardCharsets.UTF_8);
            String mailtoLink = "mailto:pandeyvijay739@gmail.com?subject=" + subject + "&body=" + body;
            model.addAttribute("mailtoLink", mailtoLink);
        } catch (Exception e) {
            model.addAttribute("mailtoLink", "mailto:pandeyvijay739@gmail.com");
        }

        return "index";
    }

    @GetMapping("/download-resume")
    public ResponseEntity<Resource> downloadResume() throws IOException {
        Resource resource = new ClassPathResource("static/Vijay_Pandey_Resume.pdf");

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"Vijay-Pandey-Resume.pdf\"")
                .body(resource);
    }
}
