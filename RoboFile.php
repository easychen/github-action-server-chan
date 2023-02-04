<?php
/**
 * This is project's console commands configuration for Robo task runner.
 *
 * @see https://robo.li/
 */
class RoboFile extends \Robo\Tasks
{
    // define public methods as commands
    public function publish($m = 'publish')
    {
        $this->_exec("yarn build && yarn package && git add . && git commit -m '$m' && git push ");
    }
}