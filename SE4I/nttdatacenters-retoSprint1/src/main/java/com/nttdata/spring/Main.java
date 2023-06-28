package com.nttdata.spring;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.nttdata.spring.repository.Language;
import com.nttdata.spring.services.LanguageManagementServiceI;
import java.util.List;

/**
 * Clase principal
 * 
 * @author Manoli
 *
 */
@SpringBootApplication
public class Main implements CommandLineRunner{
	
	/** LOGGER **/
	private static final Logger LOG = LoggerFactory.getLogger(Main.class);
	
	/** Servicio de idioma. **/
	@Autowired
	private LanguageManagementServiceI languageService;
	

	/**
	 * Método principal
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		
		LOG.info("TRAZA DE INICIO");
		
		LOG.info("Inicio generación de idiomas");
		
		// Creación de idiomas
		Language l1 = new Language();
		l1.setName("ES");
		l1.setMessage("¡HOLA MUNDO!");
		
		Language l2 = new Language();
		l2.setName("EN");
		l2.setMessage("HELLO WORLD!");
		
		Language l3 = new Language();
		l3.setName("FR");
		l3.setMessage("SALUT MONDE!");
		
		Language l4 = new Language();
		l4.setName("PT");
		l4.setMessage("OLÁ MUNDO!");
		
		LOG.info("Fin generación de idiomas");

		LOG.info("Inicio inserciones de idiomas");
		
		// Inserciones de idiomas
		languageService.createNewLanguage(l1);
		languageService.createNewLanguage(l2);
		languageService.createNewLanguage(l3);
		languageService.createNewLanguage(l4);
		
		LOG.info("Fin inserciones de idiomas");

		LOG.info("Inicio del listado de todos los idiomas");
		
		// Lista todos los idiomas
		final List<Language> allLanguages = languageService.serachAll();
		for (final Language l : allLanguages) {
			System.out.println(l.toString());
		}
		
		LOG.info("Fin del listado de todos los idiomas");
		
		LOG.info("TRAZA FIN");
	}

}
