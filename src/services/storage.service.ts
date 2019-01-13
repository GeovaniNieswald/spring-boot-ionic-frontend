import { STORAGE_KEYS } from './../config/storage-keys.cnfig';
import { LocalUser } from './../models/local-user';
import { Injectable } from "@angular/core";
import { Cart } from '../models/cart';

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let usr = localStorage.getItem(STORAGE_KEYS.localUser)

        if (usr == null) {
            return null
        } else {
            return JSON.parse(usr)
        }
    }

    getCart(): Cart {
        let str = localStorage.getItem(STORAGE_KEYS.cart)

        if (str == null) {
            return null
        } else {
            return JSON.parse(str)
        }
    }

    setLocalUser(obj: LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser)
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
        }
    }

    setCart(obj: Cart) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.cart)
        } else {
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj))
        }
    }
}