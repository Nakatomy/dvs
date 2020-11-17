<?php

namespace Application\Src\Pagination;

use Pagerfanta\View\Template\Template;

class CustomTemplate extends Template
{
    static protected $defaultOptions = array(
        'previous_message'   => 'Previous',
        'next_message'       => 'Next',
        'css_disabled_class' => 'disabled',
        'css_dots_class'     => 'dots',
        'css_current_class'  => 'active',
        'dots_text'          => '...',
        'container_template' => '<nav class="pagination-wrapper"><ul class="pagination justify-content-center">%pages%</ul></nav>',
        'page_template'      => '<li class="page-item"><a href="%href%" class="page-link">%text%</a></li>',
        'span_template'      => '<li class="page-item %class%"><a href="#" class="page-link">%text%</a></li>'
    );

    public function container()
    {
        return $this->option('container_template');
    }

    public function page($page)
    {
        $text = $page;

        return $this->pageWithText($page, $text);
    }

    public function pageWithText($page, $text)
    {
        $search = array('%href%', '%text%');

        $href = $this->generateRoute($page);
        $replace = array($href, $text);

        return str_replace($search, $replace, $this->option('page_template'));
    }

    public function previousDisabled()
    {
        return $this->generateSpan($this->option('css_disabled_class'), $this->option('previous_message'));
    }

    public function previousEnabled($page)
    {
        return $this->pageWithText($page, $this->option('previous_message'));
    }

    public function nextDisabled()
    {
        return $this->generateSpan($this->option('css_disabled_class'), $this->option('next_message'));
    }

    public function nextEnabled($page)
    {
        return $this->pageWithText($page, $this->option('next_message'));
    }

    public function first()
    {
        return $this->page(1);
    }

    public function last($page)
    {
        return $this->page($page);
    }

    public function current($page)
    {
        return $this->generateSpan($this->option('css_current_class'), $page);
    }

    public function separator()
    {
        return $this->generateSpan($this->option('css_dots_class'), $this->option('dots_text'));
    }

    private function generateSpan($class, $page)
    {
        $search = array('%class%', '%text%');
        $replace = array($class, $page);

        return str_replace($search, $replace, $this->option('span_template'));
    }
}
