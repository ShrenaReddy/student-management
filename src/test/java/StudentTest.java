
import com.intuit.karate.junit5.Karate;

class StudentTest {

    @Karate.Test
    Karate testStudent() {
        return Karate.run("student").relativeTo(getClass());
    }
}
