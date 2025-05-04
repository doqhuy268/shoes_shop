package com.example.shoes_be.service;

import com.example.shoes_be.dto.MaterialsDTO;
import com.example.shoes_be.entity.Materials;
import java.util.List;

public interface MaterialService {
    Materials addMaterials(MaterialsDTO materialsDTO);
    List<Materials> getMaterials();
    Materials getById(Integer materialId);
    Materials updateMaterial(MaterialsDTO materialsDTO);
    boolean deleteMaterial(Integer materialId);
}
