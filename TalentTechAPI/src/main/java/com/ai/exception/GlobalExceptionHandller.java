package com.ai.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandller {
    @ExceptionHandler(TalentTechException.class)
    public ResponseEntity<APIError> talentTechExceptionHandller(WebRequest wr, Exception e) {
        APIError error = new APIError();
        error.setDesc(wr.getDescription(false));
        error.setMessege(e.getLocalizedMessage());
        error.setDateTime(LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<APIError> methodArgNotValidationExceptionHand(WebRequest wr, MethodArgumentNotValidException e) {
        APIError error = new APIError();
        error.setDesc(wr.getDescription(false));
        error.setMessege(e.getLocalizedMessage());
        error.setDateTime(LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<APIError> noHandllerFoundExceptionHandller(WebRequest wr,NoHandlerFoundException e){
        APIError error = new APIError();
        error.setDesc(wr.getDescription(false));
        error.setMessege(e.getLocalizedMessage());
        error.setDateTime(LocalDateTime.now());
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
