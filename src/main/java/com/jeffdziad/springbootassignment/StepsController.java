package com.jeffdziad.springbootassignment;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StepsController {

    @GetMapping("/steps/1")
    public String getStep1() {
        return "steps/step1";
    }

    @GetMapping("/steps/2")
    public String getStep2() {
        return "steps/step2";
    }

    @GetMapping("/steps/3")
    public String getStep3() {
        return "steps/step3";
    }

}
