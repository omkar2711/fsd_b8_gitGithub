public class mergeTwoSortedArray {



    int[] findEven(int[] numbers){


        int[] res = new int[1];

        for(int i = 0;i<numbers.length;i++){
            if(numbers[i] % 2 == 0){
                res[0] = numbers[i];
                return res;
            }
        }


        res[0] = -1;
        return res;

    }

    boolean mergeArray(int[] arr1, int[] arr2, int n, int m){

        int k = m + n - 1;
        int i = n - 1;
        int j = m - 1;

         while (i >= 0 && j >= 0) { 

            if(i != j){
                return false;
            }
            if(arr1[i] < arr2[j]){
                arr1[k] = arr2[j];
                j--;
            }
            else{
                arr1[k] = arr1[i];
                i--;
            }
            k--;
        }

        while( j >= 0){
            arr1[k] = arr2[j];
            j--;
            k--;
        }
        while( i >= 0){
            arr1[k] = arr1[i];
            i--;
            k--;
        }
        return true;
    }


    public static void main(String[] args) {

        mergeTwoSortedArray obj = new mergeTwoSortedArray();
        int[] arr1 = {1,3,5,0,0,0}; 
        int[] arr2 = {2,4,6}; 

        int[] numbers = {3,5,7,9,10};

        int n = 3;
        int m = 3;

    

        boolean flag = obj.mergeArray(arr1, arr2, n, m);


        int[] ans = obj.findEven(numbers);
        System.out.println(ans[0]);
       




    }
}
