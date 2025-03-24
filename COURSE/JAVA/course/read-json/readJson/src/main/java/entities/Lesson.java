package entities;

import java.time.Instant;

public class Lesson {

    private Long id;
    private String title;
    private String media;
    //private Instant timestamp;

    public Lesson() {
    }

    public Lesson(Long id, String title, String media) {
        this.id = id;
        this.title = title;
        this.media = media;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }
}
