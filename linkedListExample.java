

class Node {
    int data;
    Node next;

    Node(int val){
        this.data = val;
        this.next = null;
    }
}

class LL{

    Node head;

    void add(int val){
        Node newNode = new Node(val);
        if(head == null){
            head = newNode;
            return;
        }

        newNode.next = head;
        head = newNode;
    }

    void diplayList(){
        Node curr = head;

        while(curr != null){
            System.out.print(curr.data + " -> ");
            curr = curr.next;
        }
        System.out.println("null");
    }

    void reverse(){
        Node prev = null;
        Node curr = head;
        Node nxt = null;

        while(curr != null){
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        head = prev;
    }


    boolean search(int val){

        Node curr = head;
        while(curr != null){
            if(curr.data == val){
                return true;
            }
            curr = curr.next;
        }

        return false;
    }

}

public class linkedListExample {
    public static void main(String[] args) {
        LL list = new LL();


        list.add(10);
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);

        System.out.println("Linked List before reversing");
        list.diplayList();
        boolean flag = list.search(10);
        System.out.println(flag);

        list.reverse();
        System.out.println("Linked List after reversing");
        list.diplayList();

        

    }
}