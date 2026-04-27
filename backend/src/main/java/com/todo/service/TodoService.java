package com.todo.service;

import com.todo.dto.TodoDTO;
import com.todo.model.Todo;
import com.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TodoService {
    
    @Autowired
    private TodoRepository todoRepository;
    
    // Convert Entity to DTO
    private TodoDTO convertToDTO(Todo todo) {
        return new TodoDTO(
            todo.getId(),
            todo.getTitle(),
            todo.getDescription(),
            todo.isCompleted()
        );
    }
    
    // Convert DTO to Entity
    private Todo convertToEntity(TodoDTO todoDTO) {
        Todo todo = new Todo();
        todo.setTitle(todoDTO.getTitle());
        todo.setDescription(todoDTO.getDescription());
        todo.setCompleted(todoDTO.isCompleted());
        return todo;
    }
    
    // Create Todo
    public TodoDTO createTodo(TodoDTO todoDTO) {
        Todo todo = convertToEntity(todoDTO);
        Todo savedTodo = todoRepository.save(todo);
        return convertToDTO(savedTodo);
    }
    
    // Get all todos
    public List<TodoDTO> getAllTodos() {
        return todoRepository.findAll()
            .stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    // Get todo by ID
    public TodoDTO getTodoById(Long id) {
        Todo todo = todoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        return convertToDTO(todo);
    }
    
    // Update todo
    public TodoDTO updateTodo(Long id, TodoDTO todoDTO) {
        Todo existingTodo = todoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        
        existingTodo.setTitle(todoDTO.getTitle());
        existingTodo.setDescription(todoDTO.getDescription());
        existingTodo.setCompleted(todoDTO.isCompleted());
        
        Todo updatedTodo = todoRepository.save(existingTodo);
        return convertToDTO(updatedTodo);
    }
    
    // Delete todo
    public void deleteTodo(Long id) {
        if (!todoRepository.existsById(id)) {
            throw new RuntimeException("Todo not found with id: " + id);
        }
        todoRepository.deleteById(id);
    }
    
    // Toggle complete status
    public TodoDTO toggleComplete(Long id) {
        Todo todo = todoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Todo not found with id: " + id));
        
        todo.setCompleted(!todo.isCompleted());
        Todo updatedTodo = todoRepository.save(todo);
        return convertToDTO(updatedTodo);
    }
    
    // Get statistics
    public TodoStats getStats() {
        return new TodoStats(
            todoRepository.count(),
            todoRepository.countIncompleteTodos(),
            todoRepository.count() - todoRepository.countIncompleteTodos()
        );
    }
    
    // Stats inner class
    public record TodoStats(long total, long pending, long completed) {}
}