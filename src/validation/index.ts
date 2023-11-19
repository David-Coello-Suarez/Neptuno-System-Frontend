import { number, object, string } from 'yup'
import { icitylo, icompan, icountr, iprovin } from '../interfaces'

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

export const SchemaCompan = object<icompan>({
  comloc_countr: number().min(1, 'Seleccione al menos un elemento'),
  comloc_provin: number().min(1, 'Seleccione al menos un elemento'),
  comloc_cityxx: number().min(1, 'Seleccione al menos un elemento'),
  compan_numdoc: number()
    .typeError('Solo valores númerico')
    .integer('Solo valores númerico')
    .positive('Debe se un número positivo')
    .required('N°. Documento es requerido'),
  compan_nomcom: string().required('Nombre es requerido'),
  compan_dircom: string().required('Dirección es requerido'),
  compan_correo: string()
    .required('Correo electrónico es requerido')
    .email('Formato de correo electrónico es incorrecto'),
  compan_nummob: string()
    .required('N°. de telefono es requerido')
    .max(10, 'Máximo 10 digitos'),
})
