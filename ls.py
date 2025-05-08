public class Searchlinear {
    public static void demo(Integer key){
        System.debug('Linear Search');
        Integer s = -1;
        List<Integer> lon = new List<Integer>();
        lon.add(3);
        lon.add(4);
        lon.add(5);
        lon.add(6);
        System.debug('List: ' + lon);
        
        for (Integer i = 0; i < lon.size(); i++) {
            if (key == lon[i]) {
                s = 1;
            }
        }

        if (s == 1) {
            System.debug('Element found');
        } else {
            System.debug('Element not found');
        }
    }
}


sidgupta4690@cloudshell:~$ git clone https://github.com/YashGatkal/lp2.git
Cloning into 'lp2'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (3/3), done.
sidgupta4690@cloudshell:~$ ls
lp2  README-cloudshell.txt
sidgupta4690@cloudshell:~$ cd lp2
sidgupta4690@cloudshell:~/lp2$ ls prom.py
prom.py
sidgupta4690@cloudshell:~/lp2$ python prom.py
hello world
sidgupta4690@cloudshell:~/lp2$ 
