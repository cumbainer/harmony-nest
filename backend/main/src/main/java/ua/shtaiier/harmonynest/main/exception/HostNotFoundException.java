package ua.shtaiier.harmonynest.main.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class HostNotFoundException extends RuntimeException{
    public HostNotFoundException(String message) {
        super(message);
    }
}
