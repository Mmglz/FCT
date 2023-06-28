package com.nttdata.spring.repository;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * Clase de la entidad Idioma
 * 
 * @author Manoli
 *
 */
@Getter
@Setter
@Entity
@Table(name = "T_LANGUAGE")
public class Language implements Serializable {

	/** Serial version **/
	private static final long serialVersionUID = 1L;

	/** Identificador (PK) **/
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Long languageId;

	/** Nombre del idioma. **/
	@Column(name = "NAME")
	private String name;

	/** Mensaje. **/
	@Column(name = "MESSAGE")
	private String message;

	@Override
	public String toString() {
		return "Language [languageId=" + languageId + ", name=" + name + ", message=" + message + "]";
	}
}
