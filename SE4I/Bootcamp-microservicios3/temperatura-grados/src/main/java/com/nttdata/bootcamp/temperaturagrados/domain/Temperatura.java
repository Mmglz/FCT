package com.nttdata.bootcamp.temperaturagrados.domain;

public class Temperatura {
	
	private TempEnum sistema;

	public Temperatura(String sistema) {
		this.sistema = TempEnum.valueOf(sistema.toUpperCase());
	}

	public Temperatura() {
		this.sistema = TempEnum.CELSIUS;
	}

	public double convert(String degrees) {
		
		Double degreesD = Double.parseDouble(degrees);
		double result;
		
		if (sistema.equals(TempEnum.FARENHEIT)) {
			result = (degreesD - 32) / 1.8;
		} else {
			result = (degreesD * 1.8) + 32;
		}
		return result;
	}
}
