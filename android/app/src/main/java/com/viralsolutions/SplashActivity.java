package com.viralsolutions;
import android.os.Bundle; // here
import android.content.Intent;

import androidx.appcompat.app.AppCompatActivity;


public class SplashActivity extends ReactActivity {

  
@Override
    protected void onCreate(Bundle savedInstanceState) {
    
        super.onCreate(savedInstanceState);
        Intent intent= new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();
    }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the rendered you wish to use (Fabric or the older renderer).
   */
 
}
