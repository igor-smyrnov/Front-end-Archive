package com.AlghorithmsOnJava;

/**
 * Created by Igor on 4/4/2017.
 */
public class Sort {

    public int[] bubbleSort(int[] array) {

        boolean flag = true;

        while (flag) {
            flag = false;
            for (int i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    int temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    flag = true;
                }
            }
        }
        return array;
    }
}
