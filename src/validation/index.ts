import { number, object, string } from 'yup'
import { icitylo, icountr, iprovin } from '../interfaces'

export const SchemaCountry = object<icountr>({
  countr_namcou: string().required('Nombre de país es requerido'),
  countr_abbrev: string().required('Abreviatura es requerido'),
})

export const SchemaProvin = object<iprovin>({
  countr_countr: number().min(1, 'Seleccione al menos un elemento'),
  provin_nampro: string().required('Nombre es requerido'),
  provin_abbrev: string().required('Abreviatura es requerido'),
})

export const SchemaCity = object<icitylo>({
  provin_provin: number().min(1, 'Seleccione al menos un elemento'),
  citylo_namcit: string().required('Nombre es requerido'),
  citylo_abbrev: string().required('Abreviatura es requerido'),
})
