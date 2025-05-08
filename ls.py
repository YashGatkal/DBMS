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
