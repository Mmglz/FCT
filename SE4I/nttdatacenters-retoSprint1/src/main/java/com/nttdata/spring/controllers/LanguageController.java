package com.nttdata.spring.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.nttdata.spring.repository.Language;
import com.nttdata.spring.services.LanguageManagementServiceI;

/**
 * Clase controlador Idioma
 * 
 * @author Manoli
 *
 */
@RefreshScope
@RestController
@RequestMapping("/home")
public class LanguageController {

	@Autowired
	LanguageManagementServiceI languageService;

	/**
	 * Muestra todos los idiomas.
	 * 
	 * @return List<Language>
	 */
	@GetMapping
	public @ResponseBody List<Language> languajeList() {
		return languageService.serachAll();
	}

	/**
	 * Muestra el mensaje en el idioma pasado como parámetro.
	 * 
	 * @param name
	 * @return Message
	 */
	@GetMapping("/{name}")
	public @ResponseBody String languageMessage(final @PathVariable String name) {
		return languageService.searchByName(name).getMessage();
	}

	/**
	 * Inserta un nuevo idioma.
	 * 
	 * @param newLanguage
	 */
	@PostMapping("/newLanguage")
	public String createNewLanguage(@RequestBody Language newLanguage) {
		languageService.createNewLanguage(newLanguage);
		return "Idioma añadido";
	}

	/**
	 * Actualiza un idioma.
	 * 
	 * @param updateLanguage
	 * @param id
	 * @return updateLanguage
	 */
	@PutMapping(value = "/updateLanguaje")
	public void updateLanguaje(@RequestParam Long languageId, @RequestBody Language newLanguaje) {
		languageService.updateLanguage(languageId, newLanguaje);
	}
	
//	@PutMapping("updateLanguage/{id}")
//	public Language updateLanguage(final @RequestBody Language updateLanguage, final @PathVariable Long id) {
//		languageService.updateLanguage(id, updateLanguage);
//		return updateLanguage;
//	}

	/**
	 * Eliminina un idioma por su ID.
	 * 
	 * @param id
	 * @return boolean
	 */
	@DeleteMapping("deleteLanguage/{id}")
	public String deleteLanguage(final @PathVariable Long id) {

		boolean ok = this.languageService.deleteLanguage(id);
		
		if (ok) {
			return "Idioma eliminado.";
		} else {
			return "No se ha podido eliminar el idioma.";
		}
	}

}
