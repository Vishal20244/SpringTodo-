// API Constants
export const API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api',
    TIMEOUT: parseInt(process.env.REACT_APP_API_TIMEOUT, 10) || 10000,
    RETRY_COUNT: 3,
    RETRY_DELAY: 1000,
};

// Todo Constants
export const TODO_CONSTANTS = {
    MAX_TITLE_LENGTH: 200,
    MAX_DESCRIPTION_LENGTH: 1000,
    MIN_TITLE_LENGTH: 3,
    DEFAULT_PAGE_SIZE: 10,
};

// Filter Options
export const FILTER_OPTIONS = {
    ALL: 'all',
    PENDING: 'pending',
    COMPLETED: 'completed',
};

export const FILTERS = [
    { value: FILTER_OPTIONS.ALL, label: 'All', icon: '📋' },
    { value: FILTER_OPTIONS.PENDING, label: 'Pending', icon: '⏳' },
    { value: FILTER_OPTIONS.COMPLETED, label: 'Completed', icon: '✅' },
];

// Toast Messages
export const TOAST_MESSAGES = {
    ADD_SUCCESS: 'Todo added successfully!',
    ADD_ERROR: 'Failed to add todo',
    UPDATE_SUCCESS: 'Todo updated successfully!',
    UPDATE_ERROR: 'Failed to update todo',
    DELETE_SUCCESS: 'Todo deleted successfully!',
    DELETE_ERROR: 'Failed to delete todo',
    TOGGLE_SUCCESS: 'Todo status updated!',
    TOGGLE_ERROR: 'Failed to update status',
    NETWORK_ERROR: 'Network error. Please check your connection',
    SERVER_ERROR: 'Server error. Please try again later',
};

// Validation Messages
export const VALIDATION_MESSAGES = {
    TITLE_REQUIRED: 'Title is required',
    TITLE_MIN_LENGTH: `Title must be at least ${TODO_CONSTANTS.MIN_TITLE_LENGTH} characters`,
    TITLE_MAX_LENGTH: `Title cannot exceed ${TODO_CONSTANTS.MAX_TITLE_LENGTH} characters`,
    DESCRIPTION_MAX_LENGTH: `Description cannot exceed ${TODO_CONSTANTS.MAX_DESCRIPTION_LENGTH} characters`,
};

// Local Storage Keys
export const STORAGE_KEYS = {
    THEME: 'todo_app_theme',
    USER_PREFERENCES: 'todo_user_preferences',
    AUTH_TOKEN: 'todo_auth_token',
};

// Theme Constants
export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

// Status Codes
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
};

// Routes
export const ROUTES = {
    HOME: '/',
    TODOS: '/todos',
    ABOUT: '/about',
    CONTACT: '/contact',
};