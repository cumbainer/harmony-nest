package ua.shtaiier.harmonynest.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import ua.shtaiier.harmonynest.security.config.SecurityModuleConfig;

@SpringBootApplication
@Import({SecurityModuleConfig.class})
public class HarmonyNestApplication {

    public static void main(String[] args) {
        SpringApplication.run(HarmonyNestApplication.class, args);
    }
}
