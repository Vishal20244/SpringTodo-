package com.todo.repository;

import com.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    
    // Find incomplete todos
    List<Todo> findByCompletedFalse();
    
    // Find complete todos
    List<Todo> findByCompletedTrue();
    
    // Search by title containing keyword
    List<Todo> findByTitleContainingIgnoreCase(String keyword);
    
    // Count statistics
    @Query("SELECT COUNT(t) FROM Todo t WHERE t.completed = false")
    long countIncompleteTodos();
}