package com.nttdata.spring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nttdata.spring.repository.Language;
import com.nttdata.spring.repository.LanguageRepositoryI;

/**
 * Implementación del servicio de idioma
 * 
 * @author Manoli
 *
 */
@Service
public class LanguageManagementServiceImpl implements LanguageManagementServiceI {

	/** Repositorio. **/
	@Autowired
	private LanguageRepositoryI languageRepo;

	@Override
	public void createNewLanguage(Language newLanguage) {
		

		// Verificación de nulidad y existencia.
		if (newLanguage != null && newLanguage.getLanguageId() == null) {

			// Inserción de un nuevo cliente.
			languageRepo.save(newLanguage);
		}
	}

//	@Override
//	public void updateLanguage(Language updateLanguage) {
//
//		// Verificación de nulidad y existencia.
//		if (updateLanguage != null && updateLanguage.getLanguageId() != null) {
//
//			// Actualización de un idioma.
//			languageRepo.
//		}
//	}

	public void updateLanguage(Long languageId, Language newLanguage) {
		Language languageExists = languageRepo.findById(languageId).orElseThrow();
		languageExists.setName(newLanguage.getName());
		languageExists.setMessage(newLanguage.getMessage());
		languageRepo.save(languageExists);
	}

	@Override
	public boolean deleteLanguage(Long id) {

		try {

			// Elimina el idioma por su ID.
			languageRepo.deleteById(id);
			return true;

		} catch (Exception ex) {
			return false;
		}
	}

	@Override
	public List<Language> serachAll() {

		// Obtención de todos los idiomas.
		return languageRepo.findAll();
	}

	@Override
	public Language searchByName(String name) {

		// Obtención de un idioma por su nombre
		return languageRepo.findByName(name);
	}

	@Override
	public Optional<Language> searchById(Long id) {

		// Obtención de un idioma por su ID
		return languageRepo.findById(id);
	}

}
