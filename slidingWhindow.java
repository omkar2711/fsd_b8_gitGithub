public class slidingWhindow {
    public static void main(String[] args) {
        int arr[] = {2,6,3,8,9,3,6,3,7,4,8};
        int k = 7;
        int n = arr.length;

        int sum = 0;

        for(int i = 0;i<k;i++){
            sum += arr[i];
        }
        int j = k;

        int maxSum = Integer.MIN_VALUE;
        int currSum = sum;

        for(int i = 0;i<n-k;i++){
            currSum +=  arr[j];
            currSum -= arr[i];
            j++;

            maxSum = Math.max(currSum, maxSum);
        }

        System.out.println(maxSum);

        
    }
}
