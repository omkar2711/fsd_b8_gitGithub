
import java.util.*;

class Graph {
    private int vertices;
    private List<List<Integer>> adjList;
    private int[][] adjMatrix;


    //constructor
    public Graph(int vertices){
        this.vertices = vertices;
        adjList = new ArrayList<>();
        adjMatrix = new int[vertices][vertices];

        for(int i = 0;i<vertices;i++){
            adjList.add(new ArrayList<>());
        }
    }


    //Add Edges (undirected, unweighted)
    public void addEdges(int u, int v){
        //adjList
        adjList.get(u).add(v);
        adjList.get(v).add(u);

        //adjMatrix
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1;
    }


    //Print AdjList
    public void printAdjList(){
        System.out.println("Adjacancy List: ");
        for(int i = 0;i< vertices;i++){
            System.out.print(i + " -> ");
            for(int num : adjList.get(i)){
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }

    //Print AdjMatrix

    public void printAdjMatrix(){
        System.out.println("\n Adjacancy Matrix: ");
        for(int i = 0;i<vertices;i++){
            for(int j = 0;j<vertices;j++){
                System.out.print(adjMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }


    //Depth First Search (DFS)
    public void dfs(int start){
        boolean[] visited = new boolean[vertices];
        System.out.print("\n DFS Starting from  " + start + ": ");
        dfsHelper(start, visited);
        System.out.println();
    }
    private void dfsHelper(int v, boolean[] visited){
        visited[v] = true;
        System.out.print(v + " ");
        for(int num : adjList.get(v)){
            if(!visited[num]){
                dfsHelper(num, visited);
            }
        }
    }



    //Breadth First Search (BFS)
    public void bfs(int start){
        boolean[] visited = new boolean[vertices];
        Queue<Integer> queue = new LinkedList<>();

        visited[start] = true;
        queue.add(start);
        System.out.print("\n BFS Starting from " + start + ": ");

        while(!queue.isEmpty()){
            int node = queue.poll();
            System.out.print(node + " ");
            for(int num : adjList.get(node)){
                if(!visited[num]){
                    visited[num] = true;
                    queue.add(num);
                }
            }
        }
        System.out.println();
    }
}


public class graphsEx {
    public static void main(String[] args) {
        Graph g = new Graph(6);

        //add edges
        g.addEdges(1, 2);
        g.addEdges(1,3);
        // g.addEdges(2,1);
        g.addEdges(2,4);
        // g.addEdges(3,1);
        g.addEdges(3,4);
        g.addEdges(3,5);
        // g.addEdges(4,2);
        // g.addEdges(4,3);
        g.addEdges(4,5);
        // g.addEdges(5,3);
        // g.addEdges(5,4);

        //print
        g.printAdjList();
        g.printAdjMatrix();


        //Traversal
        g.dfs(1);
        g.bfs(1);

    }
    
}
