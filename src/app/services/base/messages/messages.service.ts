import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }
  private MSG_SUCCESS: string = "Realizado com sucesso";
  private MSG_ERROR: string = "Realizado com sucesso";
  private MSG_RETRY: string = "Tente novamente mais tarde";

  swalSuccess(msg: string = this.MSG_SUCCESS, title: string = "Sucesso") {
    Swal.fire(title, msg, "success");
  }
  swalError(msg: string = this.MSG_RETRY, title: string = "Erro") {
    Swal.fire(title, msg, "error");
  }
  toastSuccess(msg: string = this.MSG_SUCCESS) {
    Swal.fire({
      icon: "success",
      title: msg,
      toast: true,
      showConfirmButton: false,
      position: 'top-end',
      timer: 1500
    })
  }
  toastError(msg: string = this.MSG_RETRY) {
    Swal.fire({
      icon: "error",
      title: msg,
      toast: true,
      showConfirmButton: false,
      position: 'top-end',
      timer: 1500
    })
  }

  toastLoading() {
    Swal.fire({
      toast: true,
      didOpen: () => {
        Swal.showLoading()
      },
      position: 'top-end',
    })
  }

  swalLoading() {
    Swal.fire({
      title: 'A carregar!',
      html: 'Por favor, aguarde',
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }

  swalClose() {
    Swal.close()
  }

  swalConfirmDelete() {
    return Swal.fire({
      title: 'Eliminar',
      text: 'Pretende mesmo eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    });
  }
  swalConfirmDeleteAll() {
    return Swal.fire({
      title: 'Eliminar',
      text: 'Pretende mesmo eliminar todos os registos selecionados?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    });
  }
}
