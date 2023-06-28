package com.nttdata.bootcamp.autoconfigure.temperatura;

import org.springframework.boot.context.properties.ConfigurationProperties;
import lombok.Getter;
import lombok.Setter;

@ConfigurationProperties("temperatura.sistema")
@Getter
@Setter
public class TemperaturaProperties {
	
	private String degrees = "celsius";

}
