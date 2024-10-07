import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  /**
   * Установить значение в localStorage
   * @param key ключ: string
   * @param value значение: any
   */
  public set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Получение значение
   * @param key ключ : string
   * @returns значение или null, если ключ не найден
   */
  public get(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  /**
   * Удаление значение из localStorage
   * @param key ключ: string
   */
  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Проверка существует ли значение в localStorage
   * @param key ключ: string
   * @returns true, если значение есть, false в противном случае
   */
  public has(key: string): boolean {
    return localStorage.getItem(key) !== null
  }

  /**
   * DANGER!, очистка localStorage
   */
  public clear(): void {
    localStorage.clear
  }

}
