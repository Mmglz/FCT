package com.nttdata.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repositorio de Idioma
 * 
 * @author Manoli 
 *
 */
@Repository
public interface LanguageRepositoryI extends JpaRepository<Language, Long>{
	
	/**
	 * Método que busca un idioma por su nombre
	 * 
	 * @param name
	 * @return Language
	 */
	public Language findByName(final String name);
	
	/**
	 * Método que busca un idioma por su id
	 * 
	 * @param id
	 * @return Language
	 */
	public Language findById(final long id);

}
