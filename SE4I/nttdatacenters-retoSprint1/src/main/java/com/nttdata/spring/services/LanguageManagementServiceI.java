package com.nttdata.spring.services;

import java.util.List;
import java.util.Optional;

import com.nttdata.spring.repository.Language;

/**
 * Interfaz del servicio de idioma
 * 
 * @author Manoli
 *
 */
public interface LanguageManagementServiceI {

	/**
	 * Inserta un nuevo idioma.
	 * 
	 * @param newLanguage
	 * @return 
	 */
	public void createNewLanguage(final Language newLanguage);
	
	/**
	 * Actualiza un idioma existente.
	 * 
	 * @param updateLanguage
	 */
//	public void updateLanguage(final Language updateLanguage);
	
	public void updateLanguage(Long languageId, Language newLanguage);
	
	/**
	 * Elimina un idioma existente
	 * 
	 * @param id
	 * @return boolean
	 */
	public boolean deleteLanguage(Long id);
	
	/**
	 * Obtiene todos los idiomas existentes.
	 * 
	 * @return List<Language>
	 */
	public List<Language> serachAll();
	
	/**
	 * Obtiene un idioma por su nombre.
	 * 
	 * @param name
	 * @return Language
	 */
	public Language searchByName(String name);
	
	/**
	 * Obtiene un idioma por si ID.
	 * 
	 * @param id
	 * @return Language
	 */
	public Optional<Language> searchById(Long id);
	
}
