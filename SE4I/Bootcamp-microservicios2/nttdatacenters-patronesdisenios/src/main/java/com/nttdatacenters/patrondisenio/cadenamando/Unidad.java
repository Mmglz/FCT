package com.nttdatacenters.patrondisenio.cadenamando;

public class Unidad {

	protected Unidad mando;

	protected String name;

	public Unidad(String name) {
		this.name = name;
	}

	public void estableceMando(Unidad mando) {
		this.mando = mando;
	}

	public void ejecutaOrden(String orden) {
		if (mando != null) {
			System.out.println("Ejecuta la orden " + mando.name);
			mando.ejecutaOrden(orden);
		} else {
			System.out.println("Orden: " + orden);
		}
	}

}
