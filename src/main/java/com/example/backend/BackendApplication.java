package com.example.backend;

import com.example.backend.repositorio.PerfumeRepositorio;
import com.example.backend.entidades.Perfume;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	@Autowired
	private PerfumeRepositorio repositorio;
	@Override
	public void run(String... args){
		/*
	Perfume perfume1=new Perfume("Pefume luis","Fuerte","Hombre","Nivea",10);
	repositorio.save(perfume1);

*/
	}

}
