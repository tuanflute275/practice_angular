import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'THEORY_ANGULAR';
  filterStatus = 'XEM_TAT_CA'
  isHighLight = false;
  evenStyle = { color: 'red', fontSize: '20px' }
  oddStyle = { color: 'black', fontSize: '40px' }
  name = ''
  size = 200;
  qrInfo = '';
  traicay = ['tao', 'xoai', 'nho'];
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 1, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 1, en: 'activity', vn: 'hoạt động', memorized: true },
  ];
  newEn = '';
  newVn = '';
  isShowForm = true

  public change(event: any) {
    this.qrInfo = event.target.value
  }
  addWord() {
    this.arrWords.push({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    });
    this.newEn = ''
    this.newVn = ''
    this.isShowForm = false
  }
  removeWord(id: number){
    const index = this.arrWords.findIndex(word => word.id === id )
    this.arrWords.splice(index, 1)
  }

  // *ngIf="filterStatus === 'XEM_TAT_CA' || (filterStatus === 'XEM_DA_NHO' && item.memorized) || (filterStatus === 'XEM_CHUA_NHO' && !item.memorized)">
  getShowStatus(memorized: boolean){
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;

    return dkXemTatCa || dkXemDaNho || dkXemChuaNho
  }
}
