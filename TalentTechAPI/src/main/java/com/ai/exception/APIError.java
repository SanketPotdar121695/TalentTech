package com.ai.exception;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class APIError {
    private String messege;
    private String desc;
    private LocalDateTime dateTime;
}
