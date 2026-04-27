package com.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoApplication {
    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
        System.out.println("=".repeat(50));
        System.out.println("✅ Todo Backend API is Running!");
        System.out.println("📝 API URL: http://localhost:8080/api/todos");
        System.out.println("=".repeat(50));
    }
}