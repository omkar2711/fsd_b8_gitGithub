interface ATM {
    void withdraw(int amount);
    void checkBalance();
    void deposite(int amount);
}

class BankAtm implements ATM {

    int balance = 100;
    public void withdraw(int amount){
        if(amount < 0){
            System.out.println("Amount cannot be negative");
            return;
        }
        if(amount < balance){
            balance -= amount;
            System.out.println("Withdrawn amount : " + amount);
        }
        else{
            System.out.println("Insuffient Balance");
        }
    }

    @Override
    public void checkBalance(){
        System.out.println("Available Balance: " + balance);
    }

    public void deposite(int amount){
        balance += amount;
        System.out.println("Money Deposited");
    }

}





public class abstractionExample {
    public static void main(String[] args) {
        ATM atm = new BankAtm();

           atm.checkBalance();

        atm.withdraw(190);

        atm.checkBalance();

        atm.deposite(20);

          atm.checkBalance();

    }
}
