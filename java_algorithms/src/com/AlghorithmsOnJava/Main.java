package com.AlghorithmsOnJava;

public class Main {

    public static void main(String[] args) {
        Sort sort = new Sort();
        int[] arrayIn = {3, 2, 1, 5, 6};
        int[] arrayOut = sort.bubbleSort(arrayIn);
        for (int i = 0; i < arrayOut.length; i++) {
            System.out.println(arrayOut[i]);
        }
    }
}
